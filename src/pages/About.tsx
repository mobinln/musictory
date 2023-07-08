import Card from "components/Card";

export default function AboutPage() {
  return (
    <div className="relative z-10 h-screen w-screen flex justify-center items-center">
      <Card>
        <div className="text-center">
          With ❤️ by{" "}
          <a href="https://github.com/mobinln" target="_blank" rel="noopener">
            mobinln
          </a>
        </div>
      </Card>
    </div>
  );
}
