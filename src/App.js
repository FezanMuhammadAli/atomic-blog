import { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Archive from "./Archive";
import { PostsProvider, PostsContext } from "./PostsProvider";

function App() {
  const [isFakeDark, setIsFakeDark] = useState(false);
  // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );

  return (
    <PostsProvider>
      <section>
        <button
          onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
          className="btn-fake-dark-mode"
        >
          {isFakeDark ? "☀️" : "🌙"}
        </button>

        <Header PostsContext={PostsContext} />
        <Main PostsContext={PostsContext} />
        <Archive PostsContext={PostsContext} />
        <Footer />
      </section>
    </PostsProvider>
  );
}

function Footer() {
  return <footer>&copy; by The Atomic Blog ✌️</footer>;
}

export default App;
