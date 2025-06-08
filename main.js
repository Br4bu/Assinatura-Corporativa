// Este arquivo contém a lógica JavaScript da aplicação. Ele gerencia a interação do usuário, manipula o armazenamento local para salvar assinaturas e configurações, e atualiza a interface do usuário em tempo real.
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile(path.join(__dirname, 'src', 'index.html'));
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

//# sourceMappingURL=main.js.map