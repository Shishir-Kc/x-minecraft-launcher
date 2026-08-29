
const core = require('@actions/core');

async function main() {
  const body = core.getInput('body')
  const version = core.getInput('version')
  const repository = process.env.GITHUB_REPOSITORY || 'voxelum/x-minecraft-launcher'
  const releaseBase = `https://github.com/${repository}/releases/download/v${version}`

  let content = body

  const rpmUrl = `${releaseBase}/xmcl-${version}-x86_64.rpm`
  const rpmArmUrl = `${releaseBase}/xmcl-${version}-aarch64.rpm`
  const tarUrl = `${releaseBase}/xmcl-${version}-x64.tar.xz`
  const tarArmUrl = `${releaseBase}/xmcl-${version}-arm64.tar.xz`
  const debUrl = `${releaseBase}/xmcl-${version}-amd64.deb`
  const debArmUrl = `${releaseBase}/xmcl-${version}-arm64.deb`
  const appImageUrl = `${releaseBase}/xmcl-${version}-x86_64.AppImage`
  const appImageArmUrl = `${releaseBase}/xmcl-${version}-arm64.AppImage`

  content += `\n\n## Downloads\n\n`
  content += `- Windows (x64): [installer](${releaseBase}/xmcl-${version}-win32-x64.exe) [zip](${releaseBase}/xmcl-${version}-win32-x64.zip)\n`
  content += `- Linux (x64): [AppImage](${appImageUrl}) [deb](${debUrl}) [tar.xz](${tarUrl}) [rpm](${rpmUrl})\n`
  content += `- Linux (arm64): [AppImage](${appImageArmUrl}) [deb](${debArmUrl}) [tar.xz](${tarArmUrl}) [rpm](${rpmArmUrl})\n`
  content += `- Mac (x64): [dmg](${releaseBase}/xmcl-${version}-x64.dmg)\n`
  content += `- Mac (arm64): [dmg](${releaseBase}/xmcl-${version}-arm64.dmg)\n`

  core.setOutput('body', content)
}

main();
