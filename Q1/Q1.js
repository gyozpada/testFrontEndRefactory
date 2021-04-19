const { kMaxLength } = require("buffer");
const readline = require("readline");
const wordwrap = require("wordwrapjs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const len = 30;

let warung, tanggal, kasir;
let total = 0;
let produk = [];

const item = async () => {
  rl.question("Apa item yang dibeli? ", (inItem) => {
    rl.question("Berapa harganya? ", (inPrice) => {
      rl.question('Apakah ada item lagi? Jawab "ya" atau "tidak" ', (exit) => {
        produk.push({
          name: inItem,
          price: inPrice,
        });

        if (exit !== "ya") {
          printNota();
          rl.close();
        } else {
          item();
        }
      });
    });
  });
};

const init = async () => {
  await rl.question("Apa nama warung anda? ", async (inWarung) => {
    await rl.question(
      "Transaki pada tanggal (ex: dd/mm/yyyy HH:MM:SS) ",
      async (inTanggal) => {
        await rl.question("Siapa nama anda? ", async (inKasir) => {
          warung = inWarung;
          tanggal = inTanggal;
          kasir = inKasir;

          await item();
        });
      }
    );
  });
};

const printNota = () => {
  console.log(
    wordwrap
      .wrap(warung, { width: len })
      .padStart(Math.floor((len - warung.length) / 2) + warung.length)
  );
  console.log("Tanggal :" + tanggal);
  console.log("Nama Kasir :" + wordwrap.wrap(kasir, { width: 18 }));
  console.log("\n==============================");
  produk.forEach((item) => {
    const names = wordwrap.lines(item.name, { width: len / 2 });
    names.forEach((nameitem, index) => {
      if (index < names.length - 1) {
        console.log(nameitem);
      } else {
        const price = "Rp" + item.price;
        console.log(
          nameitem +
            price.padStart(
              len - (nameitem.length + price.length) + price.length,
              "."
            )
        );
      }
    });
    total += parseInt(item.price);
  });
  const grandTotal = "Rp" + total;
  console.log(
    "\nTotal" +
      grandTotal.padStart(
        len - (5 + grandTotal.length) + grandTotal.length,
        "."
      )
  );
};

rl.on("close", function () {
  console.log("\nBYE BYE !!!");
});

(async () => {
  try {
    await init();
  } catch (e) {
    console.log("Maaf Error :(");
  }
})();
