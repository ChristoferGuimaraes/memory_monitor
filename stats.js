const sys = require("os");

setInterval(() => {
  const { freemem, totalmem } = sys;

  const fmem = parseInt(freemem() / 1024 / 1024);
  const totmem = parseInt(totalmem() / 1024 / 1024);
  const percent = parseInt((fmem / totmem) * 100);

  const memory = {
    free: `${fmem} MB`,
    total: `${totmem} MB`,
    usage: `${percent}%`,
  };
  
  console.clear()
  console.log('========PC-STATS========')
  console.table(memory);
}, 1000);
