import React from 'react';
import './App.css';

const Resume = () => (
  <div className="resume">
    <header className="header">
      <h1>YAN PERTSAVY</h1>
      <p>STUDENT MMF BSU</p>
    </header>
    <div className="content">
      <aside className="sidebar">
        <section className="profile">
          <h2>PROFILE</h2>
          <p><strong>Name:</strong> Yan Pertsavy</p>
          <p><strong>Birthday:</strong> 10 september 2005 </p>
          <p><strong>Adress:</strong> Minsk, BSU</p>
          <p><strong>Tel:</strong> 235758585</p>
          <p><strong>Email:</strong> yanpertsavy@gmail.com</p>
          <p><strong>Telegram:</strong> @yan39482</p>
        </section>
      </aside>
      <main className="main-content">
        <section className="experience">
          <h2>EXPERIENCE</h2>
          <div className="experience-item">
            <p><strong>1 month internship</strong></p>
            <p>BPC</p>
            <p>Backend c# developer</p>
          </div>
          <div className="experience-item">
            <p><strong>1 month</strong></p>
            <p>BSU</p>
            <p>C# course Epam</p>
          </div>
        </section>
        <section className="education">
          <h2>STUDY</h2>
          <div className="education-item">
            <p><strong>2023 - nowadays</strong></p>
            <p>MMF BSU</p>
          </div>
          <div className="education-item">
            <p><strong>2021 - 2023 </strong></p>
            <p>lyceum BNTU</p>
          </div>
        </section>
        <section className="skills">
          <h2>SKILLS</h2>
          <div className="skills-columns">
            <div>
              <h3>Programming</h3>
              <ul>
                <li>C++</li>
                <li>C# (Entity and Ado frameworks)</li>
                <li>Java Script</li>
                <li>Figma</li>
                <li>GIT</li>
              </ul>
            </div>
            <div>
              <h3>Languages</h3>
              <ul>
                <li>English B1</li>
                <li>Russian</li>
                <li>Belarussian</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
    <footer className="footer">
      <p>Telegram @yan39482</p>
      <p>Tel 235758585</p>
      <p>Email yanpertsavy@gmail.com</p>
    </footer>
  </div>
);

export default Resume;