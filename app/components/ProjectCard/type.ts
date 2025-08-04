export type projectProps = {
  color: "blue" | "red",
  photoURL: string,
  projectName: string,
  teamName: string,
  description: string,
  teamMembers: {[key: string]: string[]};
}