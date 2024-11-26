function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    const inputEl = document.querySelector("textarea").value;
    const outputRestorant = document.querySelector("#bestRestaurant p");
    const outputWorkers = document.querySelector("#workers p");
    const inputArr = JSON.parse(inputEl);

    let result = {};

    for (const data of inputArr) {
      const [restorant, workerInfo] = data.split(" - ");
      const workers = workerInfo.split(", ");

      if (!result[restorant]) {
        result[restorant] = { name: restorant, workers: [] };
      }

      for (const worker of workers) {
        const [name, sallary] = worker.split(" ");
        result[restorant].workers.push({
          name: name,
          sallary: Number(sallary),
        });
      }
    }
    for (const rest in result) {
      const totalSum = result[rest].workers.reduce(
        (sum, worker) => sum + worker.sallary,
        0
      );
      const average = totalSum / result[rest].workers.length;
      result[rest].averageSallary = Number(average).toFixed(2);
      result[rest].bestSallary = Number(
        Math.max(
          ...result[rest].workers.map((worker) => worker.sallary)
        ).toFixed(2)
      );
    }

    const bestRestor = Object.values(result).sort(
      (a, b) => Number(b.averageSallary) - Number(a.averageSallary)
    )[0];
    outputRestorant.textContent = `Name: ${bestRestor.name} Average Salary: ${
      bestRestor.averageSallary
    } Best Salary: ${bestRestor.bestSallary.toFixed(2)}`;

    outputWorkers.textContent = bestRestor.workers
      .sort((a, b) => b.sallary - a.sallary)
      .map((worker) => `Name: ${worker.name} With Salary: ${worker.sallary}`)
      .join(" ");
  }
}
