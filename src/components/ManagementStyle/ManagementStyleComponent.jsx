import gourmet from './managementstyle.module.css';

const ManagementStyleComponent = () => {
    return (
        <section className={gourmet.type_management_style}>
            <h2 className={gourmet.title_management}>Type of Management Style</h2>
            <div className={gourmet.container_management}>
                <div className={gourmet.type_management}>
                    Collaborative
                </div>
                <div className={gourmet.definition_management}>
                Collaborative management is especially relevant in dynamic and complex environments where flexibility and adaptability are crucial. This approach can improve team morale, increase job satisfaction, and lead to better organizational results by leveraging collective knowledge and experience.
                </div>
            </div>
        </section>
    )
}

export default ManagementStyleComponent