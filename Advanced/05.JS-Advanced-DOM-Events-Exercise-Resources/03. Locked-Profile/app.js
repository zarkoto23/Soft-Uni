function lockedProfile() {
  const profiles = document.querySelectorAll(".profile");

  profiles.forEach((profile) => {
    const lockRadio = profile.querySelector('input[value="lock"]');
    const unlockRadio = profile.querySelector('input[value="unlock"]');
    const button = profile.querySelector("button");
    const hidenFrends = profile.querySelector('div[id*="HiddenFields"]');

    button.addEventListener("click", () => {
      if (unlockRadio.checked) {
        if (button.textContent == "Show more") {
          hidenFrends.style.display = "block";
          button.textContent = "Hide it";
        } else {
          hidenFrends.style.display = "none";
          button.textContent = "Show more";
        }
      }
    });
  });
}
