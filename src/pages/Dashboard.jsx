import Card from "../components/ui/Card";
import { Cards } from "../data/dashboardCards";

export default function Dashboard() {
  return (
    <div className="grid md:grid-cols-2 gap-8 mt-8">
      {Cards?.map(({ icon, title, description, link }, index) => (
        <Card
          key={index}
          icon={icon}
          title={title}
          description={description}
          linkTo={link}
        />
      ))}
    </div>
  );
}
