// Corrigé : JavaScript moderne + API Navigator
// Utilisation de const, fonctions fléchées, filter, événements et async/await.

const notions = ["HTML", "CSS", "JavaScript", "Accessibilité", "API Navigator"];

const recherche = document.querySelector("#recherche");
const resultats = document.querySelector("#resultats");
const langue = document.querySelector("#langue");
const reseau = document.querySelector("#reseau");
const copier = document.querySelector("#copier");
const message = document.querySelector("#message");

const afficherNotions = (texte = "") => {
  const correspondances = notions.filter(notion =>
    notion.toLowerCase().includes(texte.trim().toLowerCase())
  );

  resultats.replaceChildren();
  if (correspondances.length === 0) {
    const li = document.createElement("li");
    li.textContent = "Aucun résultat";
    resultats.append(li);
    return;
  }

  correspondances.forEach(notion => {
    const li = document.createElement("li");
    li.textContent = notion;
    resultats.append(li);
  });
};

recherche.addEventListener("input", event => {
  afficherNotions(event.target.value);
});

langue.textContent = navigator.language || "Langue non disponible";

const mettreAJourReseau = () => {
  reseau.textContent = navigator.onLine
    ? "Réseau détecté (Internet non garanti)"
    : "Navigateur hors ligne";
};

mettreAJourReseau();
window.addEventListener("online", mettreAJourReseau);
window.addEventListener("offline", mettreAJourReseau);

copier.addEventListener("click", async () => {
  const resume = `SIO Campus — Langue : ${langue.textContent} ; réseau : ${reseau.textContent}`;
  if (!navigator.clipboard?.writeText) {
    message.textContent = "Copie indisponible : ouvrir le site sur HTTPS ou localhost.";
    return;
  }
  try {
    await navigator.clipboard.writeText(resume);
    message.textContent = "Résumé copié dans le presse-papiers !";
  } catch (erreur) {
    message.textContent = "Copie refusée ou indisponible. Vérifier les autorisations du navigateur.";
    console.error("Presse-papiers :", erreur);
  }
});

afficherNotions();
