import  gourmet from './officerules.module.css';

const OfficeRulesComponent = () => {
    return (
        <section className={gourmet.container_office_rules}>
            <h2 className={gourmet.title_office_rules}>Office Rules</h2>
            <ol>
                <li>Employees must arrive on time for meetings</li>
                <li>Smoking is strictly prohibited within the office premises</li>
                <li>Staff members are permitted to take breaks, but they must inform their supervisor beforehand</li>
                <li>It is not allowed to share confidential information with unauthorized individuals</li>
                <li>All electronic devices must be switched off during company presentations</li>
                <li>Employees may request vacation time in advance, subject to approval by their manager</li>
                <li>It is mandatory for all employees to complete their assigned tasks by the deadline</li>
                <li>Usage of company resources for personal projects in not permitted without prior
                authorization</li>
                <li>Staff are allowed to bring their own food and drinks to the office, but they must clean
                up after themselves.</li>
                <li>It is obligatory for employees to adhere to the dress code specific in the company
                polity.</li>
            </ol>
        </section>
    )
}

export default OfficeRulesComponent