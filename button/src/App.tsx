import "./App.css";

function base64ToBytes(base64: string) {
  const binString = atob(base64);
  return Uint8Array.from(binString, (m) => m.codePointAt(0));
}

import imgUrl from "/cat.jpeg";

function App() {
  return (
    <>
      <button
        // on hover enlarge
        style={{
          fontSize: 20,
          backgroundColor: "blue",
          color: "white",
          borderRadius: 10,
          padding: 10,

          // transition
          transition: "transform 0.3s",
          transform: "scale(1)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
        onClick={() => {
          window.location.href = new TextDecoder().decode(
            base64ToBytes(
              "aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1kUXc0dzlXZ1hjUQ=="
            )
          );
        }}
      >
        <img width={150} height={150} src={imgUrl} alt="cat" />
        click me
      </button>
    </>
  );
}

export default App;
