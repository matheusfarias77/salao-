import git from 'isomorphic-git';
import fs from 'fs';
import path from 'path';

const dir = process.cwd();

async function run() {
  console.log('--- Inicializando repositório Git ---');
  await git.init({ fs, dir, defaultBranch: 'main' });
  console.log('✓ Repositório Git inicializado com branch principal: main');

  // Find all files excluding .git, node_modules, dist
  function getFiles(currentDir, relativePath = '') {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    let files = [];
    for (const entry of entries) {
      if (['.git', 'node_modules', 'dist', '.DS_Store'].includes(entry.name)) {
        continue;
      }
      const fullPath = path.join(currentDir, entry.name);
      const relPath = relativePath ? `${relativePath}/${entry.name}` : entry.name;
      if (entry.isDirectory()) {
        files = files.concat(getFiles(fullPath, relPath));
      } else {
        files.push(relPath);
      }
    }
    return files;
  }

  const allFiles = getFiles(dir);
  console.log(`Adicionando ${allFiles.length} arquivos ao git...`);

  for (const filepath of allFiles) {
    await git.add({ fs, dir, filepath });
  }

  console.log('✓ Todos os arquivos adicionados com sucesso ao stage!');

  const sha = await git.commit({
    fs,
    dir,
    author: {
      name: 'Emilia Candido',
      email: 'emilia@example.com',
    },
    message: 'feat: landing page Emilia Beauty Coiffeur completa e responsiva',
  });

  console.log(`✓ Commit inicial criado com sucesso! SHA: ${sha.slice(0, 7)}`);

  const branch = await git.currentBranch({ fs, dir });
  console.log(`✓ Branch atual: ${branch}`);
}

run().catch(err => {
  console.error('Erro no Git:', err);
  process.exit(1);
});
