import { GroupOutlined } from '@mui/icons-material';
import gourmet from './mentalhealth.module.css';

const MentalHeatlhComponent = () => {

    const sections = [
        {
          title: 'Frustrated',
          items: [
            'Provide clarity in expectations and goals',
            'Offer regular and constructive feedback',
            'Implement professional development programs',
            'Encourage a collaborative work environment'
          ]
        },
        {
          title: 'Homesick',
          items: [
            'Create welcoming and family-like workspace',
            'Allow flexible schedule for family visits',
            'Organize social events that include families',
            'Offer emotional support and resources for adaptation'
          ]
        },
        {
          title: 'Exhausted',
          items: [
            'Promote a healthy work-life balance',
            'Set clear boundaries for working hours',
            'Provide rest and relaxation areas',
            'Encourage taking proper vacation and breaks'
          ]
        },
        {
          title: 'Self-conscious',
          items: [
            'Celebrate individual and team achievements',
            'Provide training to boost confidence',
            'Avoid unfair comparison and competition among employees'
          ]
        }
      ];
    
  return (
    <section className={gourmet.container_mental}>
        <h2 className={gourmet.title_metal}>Mental Health</h2>
        <div className={gourmet.sub_container}>
      {sections.map((section, index) => (
        <div className={gourmet.section_metal} key={index}>
          <span className={gourmet.heart}>♥</span>
          <h2 className={gourmet.subtitle}>{section.title}</h2>
          <ul className={gourmet.list_mental}>
            {section.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    </section>
  )
}

export default MentalHeatlhComponent