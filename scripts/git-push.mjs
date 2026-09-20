import git from 'isomorphic-git';
import http from 'isomorphic-git/http/node';
import fs from 'fs';

const dir = process.cwd();
const remoteUrl = process.argv[2];
const token = process.argv[3];
const username = process.argv[4] || 'git';

if (!remoteUrl) {
  console.log('Uso: node scripts/git-push.mjs <URL_DO_REPOSITORIO_GITHUB> [GITHUB_TOKEN] [USUARIO]');
  process.exit(1);
}

async function run() {
  console.log(`Configurando repositório remoto: ${remoteUrl}`);
  
  try {
    await git.deleteRemote({ fs, dir, remote: 'origin' });
  } catch (e) {
    // Remote might not exist yet
  }

  await git.addRemote({
    fs,
    dir,
    remote: 'origin',
    url: remoteUrl,
  });

  console.log('✓ Remote "origin" configurado com sucesso.');

  if (token) {
    console.log('Enviando arquivos para o GitHub...');
    const pushResult = await git.push({
      fs,
      http,
      dir,
      remote: 'origin',
      ref: 'main',
      onAuth: () => ({ username: username, password: token }),
    });
    console.log('✓ Push concluído com sucesso no GitHub!', pushResult);
  } else {
    console.log('Nenhum token fornecido para envio automático.');
    console.log('Você pode rodar no seu terminal quando preferir:');
    console.log(`  git push -u origin main`);
  }
}

run().catch(err => {
  console.error('Erro ao enviar para o GitHub:', err);
  process.exit(1);
});
