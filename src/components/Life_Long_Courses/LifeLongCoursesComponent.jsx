import gourmet from './lifelongcourses.module.css';

const LifeLongCoursesComponent = () => {
    const courses = [
        {
          title: "Course 1: Introduction to Tamales",
          goal: "Provide a basic understanding of the ingredients and process of making traditional tamales.",
          content: [
            {
              heading: "History and Origin of Tamales:",
              subContent: [
                "Brief historical introduction.",
                "Varieties of tamales in different regions."
              ]
            },
            {
              heading: "Basic Ingredients:",
              subContent: [
                "Types of corn and dough.",
                "Common fillings (meat, chicken, vegetables).",
                "Wraps (corn leaves, banana leaves)."
              ]
            },
            {
              heading: "Equipment Required:",
              subContent: [
                "Pots and steamer.",
                "Basic utensils."
              ]
            },
            {
              heading: "Preparation Process:",
              subContent: [
                "Preparation of the dough.",
                "Preparation of fillers.",
                "Wrap technique."
              ]
            },
            {
              heading: "Collecting and Storage:",
              subContent: [
                "Steaming.",
                "Storage and freezing techniques."
              ]
            },
            {
              heading: "Practice:",
              subContent: [
                "Preparation and cooking of basic tamales."
              ]
            }
          ],
          duration: "1 week, 3 sessions of 2 hours each."
        },
        {
          title: "Course 2: Advanced Techniques in Tamales Making",
          goal: "Delve into advanced techniques and the development of gourmet and regional tamales.",
          content: [
            {
              heading: "Regional Tamales Varieties:",
              subContent: [
                "Oaxacan, Yucatecan, etc.",
                "Differences in ingredients and techniques."
              ]
            },
            {
              heading: "Gourmet Fillers:",
              subContent: [
                "Combinations of non-traditional flavours.",
                "Use of exotic ingredients and haute cuisine techniques."
              ]
            },
            {
              heading: "Advanced Wrap Techniques:",
              subContent: [
                "Complex wrapping techniques.",
                "Aesthetic presentation of tamales."
              ]
            },
            {
              heading: "Vegetarian and Vegan Tamales:",
              subContent: [
                "Replacing ingredients.",
                "Innovation in flavours and textures."
              ]
            },
            {
              heading: "Collecting and Conservation Techniques:",
              subContent: [
                "Alternative cooking techniques (oven, roast).",
                "Prolonged preservation and packaging."
              ]
            },
            {
              heading: "Practice:",
              subContent: [
                "Development of regional and gourmet tamales."
              ]
            }
          ],
          duration: "2 weeks, 3 sessions of 2 hours each."
        },
        {
          title: "Course 3: Tamal Management and Marketing",
          goal: "Train in the efficient management of the production and sale of tamales.",
          content: [
            {
              heading: "Production Planning:",
              subContent: [
                "Inventory management.",
                "Optimization of production processes."
              ]
            },
            {
              heading: "Cost and Budget:",
              subContent: [
                "Cost analysis.",
                "Pricing strategies."
              ]
            },
            {
              heading: "Marketing and Sales:",
              subContent: [
                "Branding and promotion.",
                "Selling and distribution strategies."
              ]
            },
            {
              heading: "Regulatory and Regulations:",
              subContent: [
                "Health and quality standards.",
                "Local regulations for food sales."
              ]
            },
            {
              heading: "Entrepreneurship and Scalability:",
              subContent: [
                "Business growth planning.",
                "Strategies for scaling production and sales."
              ]
            },
            {
              heading: "Practice:",
              subContent: [
                "Development of a business plan for the sale of tamales."
              ]
            }
          ],
          duration: "3 weeks, 2 sessions of 2 hours each."
        }
      ];
      
  return (
    <div className={gourmet.container_courses}>
      <header>
        <h1>Life Long Courses</h1>
      </header>
      <main>
        {courses.map((course, index) => (
          <section className={gourmet.life_long_course} key={index}>
            <h2 className={gourmet.subtitle_courses}>{course.title}</h2>
            <p className={gourmet.goal_duration}><strong>Goal:</strong> {course.goal}</p>
            <ul>
              {course.content.map((item, idx) => (
                <li key={idx}>
                  <strong>{item.heading}</strong>
                  <ul>
                    {item.subContent.map((subItem, subIdx) => (
                      <li key={subIdx}>{subItem}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <p className={gourmet.goal_duration}><strong>Duration:</strong> {course.duration}</p>
          </section>
        ))}
      </main>
    </div>
  )
}

export default LifeLongCoursesComponent