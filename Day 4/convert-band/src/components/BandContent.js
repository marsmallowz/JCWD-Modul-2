function BandContent() {
  return (
    <div id="band-content">
      <div style={{ backgroundColor: "green" }}></div>

      <div id="band-header" style={{ backgroundColor: "yellow" }}>
        The Band
      </div>

      <div id="band-subheader" style={{ backgroundColor: "blue" }}>
        We love music
      </div>
      <div id="band-content-text" style={{ backgroundColor: "red" }}>
        We have created a fictional band website. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </div>

      <div id="img-band" style={{ backgroundColor: "blueviolet" }}>
        <Members />
      </div>
    </div>
  );
}

function Members() {
  let arrayMembers = [];
  for (let index = 0; index < 3; index++) {
    arrayMembers.push(
      <div id="member">
        <p>Name</p>
        <img src="/assets/member.jpg" alt="member" width="100%" height="100%" />
      </div>
    );
  }
  return arrayMembers;
}

export default BandContent;
