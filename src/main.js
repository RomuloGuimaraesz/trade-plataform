import './style.css'

document.querySelector('#app').innerHTML = `
    <header>
      <section>
        <div></div>
        <div>Home</div>
        <div>Trade</div>
      </section>

      <section>
        <div></div>
        <div></div>
      </section>
    </header>

    <main>
        <h1>Trade <br> Dashboard</h1>
        <div>
          <input type="checkbox" id="switch" />
          <label for="switch">Toggle</label>
        </div>
    </main>
`
