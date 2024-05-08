import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Discover & Share</h1>
      <br className="max-md:hidden"/>
      <span className="orange_gradient text-center">Ai-Powered Prompts</span>
      <p className="desc text-center">
      Promptify is an open-souce AI prompting tool for the modern world to discover, create and share creative prompts
      </p>

      <Feed />
    </section>
  )
}

export default Home
