import GitHubRepository from "@/lib/models/GitHubRepository";
import Project from "./projects";

export default function Portfolio(props: { gitHubRepository: GitHubRepository[] }) {
  return (
    <section className="mt-4 bg-gray-900 rounded p-4 shadow">
      <h2 className="text-xl font-semibold mb-4">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {props.gitHubRepository.map((project) => {
          return <Project key={project.id} repo={project} />;
        })}
      </div>
    </section>
  );
}