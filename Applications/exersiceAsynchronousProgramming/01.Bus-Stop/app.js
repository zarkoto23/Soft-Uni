async function getInfo() {
  const stopId = document.getElementById("stopId").value;
  const infoUrl = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;
  const stopNameEl = document.getElementById("stopName");

  const busesEl = document.getElementById("buses");

  try {
    busesEl.replaceChildren();
    const res = await fetch(infoUrl);

    const data = await res.json();

    stopNameEl.textContent = data.name;

    Object.entries(data.buses).forEach((element) => {
      const li = document.createElement("li");
      li.textContent = `Bus ${element[0]} arrives in ${element[1]} minutes`;
      busesEl.appendChild(li);
    });
  } catch (err) {
    stopNameEl.textContent = "Error";
  }
}
