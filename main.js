// classe de abstração
function Computador(os, ram, gpu, cpu, armazenamento) {
    this.os = os;
    let _ram = ram;
    this.gpu = gpu;
    this.cpu = cpu;
    this.armazenamento = armazenamento;

    this.getRam = function() {
        return _ram;
    }

    this.setRam = function(valor) {
        if(typeof _ram === 'number') {
            _ram = valor;
        }
    }
}

// classe herdeira 1
function Desktop(os, ram, gpu, cpu, armazenamento, gabinete) {
    Computador.call(this, os, ram, gpu, cpu, armazenamento);
    this.gabinete = gabinete;

    this.upgradeRam = function(upgrade) {
        // Verifica se foi inserido um valor numérico para o upgrade. Se estiver vazio, retorna 0 (sem upgrade)
        if (typeof upgrade !== 'number' || isNaN(upgrade)) {
            upgrade = 0;
        }

        const novaRam = this.getRam() + upgrade;
        this.setRam(novaRam);
    }
}

// classe herdeira 2
function Notebook(os, ram, gpu, cpu, armazenamento, bateria, tela) {
    Computador.call(this, os, ram, gpu, cpu, armazenamento);
    this.bateria = bateria;
    this.tela = tela;

    this.upgradeRam = function(upgrade) {
        // Verifica se foi inserido um valor numérico para o upgrade. Se estiver vazio, retorna 0 (sem upgrade)
        if (typeof upgrade !== 'number' || isNaN(upgrade)) {
            upgrade = 0;
        }

        const novaRam = this.getRam() + upgrade;
        this.setRam(novaRam);
    }
}

// Instância 1
const desktop1 = new Desktop('Windows 11', 16, 'NVidia GeForce RTX 3060', 'Intel Core i5-10600KF', '3TB', 'mid-tower');
console.log(desktop1);

// Instância 2
const desktop2 = new Desktop('Windows 11', 32, 'NVidia GeForce RTX 4090', 'Intel Core i7-14700K', '5TB', 'full-tower');
console.log(desktop2);

// Instância 3
const notebook1 = new Notebook('Linux Ubuntu', 8, 'Onboard', 'Intel Core i3 7100', '512GB', '37Wh', '15.6"');
console.log(notebook1);


// Memoria RAM do desktop1 antes do upgrade de 16gb
desktop1.upgradeRam(0);
console.log(`Memoria RAM do desktop1 antes do upgrade: ${desktop1.getRam()}`);

// Memoria RAM do desktop1 após upgrade de 16gb
desktop1.upgradeRam(16);
console.log(`Memoria RAM do desktop1 depois do upgrade: ${desktop1.getRam()}`);

// Memoria RAM do notebook1 antes do upgrade de 8gb
notebook1.upgradeRam(0);
console.log(`Memoria RAM do notebook1 antes do upgrade: ${notebook1.getRam()}`);

// Memoria RAM do notebook1 após upgrade de 8gb
notebook1.upgradeRam(8);
console.log(`Memoria RAM do notebook1 depois do upgrade: ${notebook1.getRam()}`);
