export interface Experience {
  "company-name": string;
  "company-url": string;
  "company-picture-url": string;
  position: string;
  tenure: string;
}

export default function getExperience(): Experience[] {
  const request = new XMLHttpRequest();
  request.open("GET", "/Data/experience.json", false);
  request.send(null);
  const experienceData: Experience[] = JSON.parse(request.responseText);
  return experienceData;
}
