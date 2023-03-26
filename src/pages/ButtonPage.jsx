import { GoBell, GoBriefcase, GoAlert } from "react-icons/go";
import Button from "../components/Button";

export default function ButtonPage() {
  return (
    <div>
      <div>
        <Button primary>
          <GoBell />
          Click me
        </Button>
      </div>
      <div>
        <Button success outline rounded>
          <GoAlert />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoBriefcase />
          See Details
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button danger outline rounded>
          Something
        </Button>
      </div>
    </div>
  );
}
