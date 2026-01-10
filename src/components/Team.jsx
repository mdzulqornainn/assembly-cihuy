// pages/Team.jsx
import ProfileCard from "./ProfileCard.jsx";
import { profiles } from "../data/Profiles.jsx";

export default function Team() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 font-press">
      <h2 className="text-2xl font-bold text-center mb-10">Our Member</h2>

      <div
        className="
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-6
          gap-6 sm:gap-8
        "
      >
        {profiles.map((person) => (
          <ProfileCard key={person.id} name={person.name} img={person.img} />
        ))}
      </div>
    </section>
  );
}
