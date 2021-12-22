const os = require('os');

setInterval(() => {
    const { arch, platform, totalmem, freemem } = os; // desestruturação
    const tRam = totalmem() / 1024 / 1024; // convert bytes em Mb
    const fRam = freemem() / 1024 / 1024; // convert bytes em Mb
    const usageRam = (fRam / tRam) * 100; // calculando o consumo de memoria Ram

    const stats = {
        OS: platform(),
        Arch: arch(),
        TotalRam: `${parseInt(tRam)} MB`,
        FreeRam: `${parseInt(fRam)} MB`,
        UsageRam: `${usageRam.toFixed(2)} %`,
    };
    console.clear(); // Limpa o console
    console.table(stats); // Cria uma tabela
    exports.stats = stats;
}, 1000);