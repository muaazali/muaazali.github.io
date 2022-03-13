export interface EducationData {
  "institute-name": string;
  "institute-location": string;
  "institute-picture-url": string;
  "degree-name": string;
  grade: string;
}

export default function getExperience(): EducationData[] {
  const request = new XMLHttpRequest();
  request.open("GET", "/Data/education.json", false);
  request.send(null);
  const educationData: EducationData[] = JSON.parse(request.responseText);
  return educationData;
}
