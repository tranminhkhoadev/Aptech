const candidates = [
    { name: "An", skills: ["C++", "Python"], role: "AI" },
    { name: "Bình", skills: ["HTML", "CSS", "JavaScript"], role: "Frontend" },
    { name: "Châu", skills: ["NodeJS", "MongoDB"], role: "Backend" },
    { name: "Dũng", skills: ["Python", "TensorFlow"], role: "AI" },
    { name: "Trung", skills: ["HTML", "CSS", "ReactJS"], role: "Frontend" },
    { name: "Thảo", skills: ["NodeJS", "Express", "Docker"], role: "Backend" },
    { name: "Hải", skills: ["Figma", "UI/UX"], role: "Design" },
    { name: "Linh", skills: ["Python", "Pandas", "Scikit-Learn"], role: "Data Science" }
];

const buildWebTeam = (data) => {
    const webDevelopers = data.filter(candidate => 
        candidate.role === "Frontend" || candidate.role === "Backend"
    );

    return webDevelopers.map(dev => `Chào ${dev.name}, mời bạn vào team Web!`);
};

console.log(buildWebTeam(candidates));