
import LeftSidebar from "../components/Overview/LeftSidebar";
import "../styles/_energy.scss";

export default function Energy() {
  return (
    <div className="main_wrapper">
 
      <LeftSidebar />
    

      <div className="energy_wrapper">
        <h2>How to stay energetic and fresh?</h2>
        <p>Here are few tips and tricks.</p>
        <div className="stress_container">
          <h3>Stress management</h3>
          <p className="banner-paragraph">
            In today's fast-paced and demanding world, managing stress is
            crucial for overall well-being and optimal performance.Take a moment
            to unwind and recharge with guided meditation sessions, deep
            breathing exercises, and mindfulness activities. Learn strategies to
            identify and cope with stress triggers, cultivate a positive
            mindset, and improve mental clarity. Remember, managing stress not
            only supports your mental health but also plays a significant role
            in maintaining balanced energy levels and achieving your fitness
            goals. Prioritize self-care and make stress management an integral
            part of your wellness routine.
          </p>
        </div>
        <div className="mid_container">
          <div className="stress_box">
            <h4>Identifying Stress:</h4>
            <ul>
              <li>
                Pay attention to physical and emotional changes: Look out for
                symptoms like headaches, muscle tension, fatigue, irritability,
                difficulty concentrating, and changes in appetite or sleep
                patterns.
              </li>
              <li>
                Notice behavioral changes: Excessive worrying, restlessness,
                withdrawing from activities, or increased use of substances can
                indicate stress.
              </li>
              <li>
                Recognize emotional signs: Feelings of overwhelm, anxiety,
                sadness, or anger that persist over time may indicate stress.
              </li>
            </ul>
          </div>
          <div className="stress_box">
            <h4>Effects of Stress on the Body:</h4>
            <ul>
              <li>
                Physical health impact: Chronic stress can contribute to high
                blood pressure, weakened immune system, digestive issues, and
                cardiovascular problems.
              </li>
              <li>
                Mental and emotional impact: Stress can lead to anxiety
                disorders, depression, mood swings, difficulty in
                decision-making, and impaired concentration.
              </li>
            </ul>
          </div>
          <div className="stress_box">
            <h4>Effects of Stress on the Mind:</h4>
            <ul>
              <li>
                Cognitive impact: Stress may affect memory, attention, and
                cognitive flexibility, making it harder to focus and think
                clearly.
              </li>
              <li>
                Emotional impact: Stress can intensify negative emotions,
                heighten sensitivity to triggers, and lead to emotional
                exhaustion.
              </li>
            </ul>
          </div>
          <div className="stress_box">
            <h4>Dealing with Stress:</h4>
            <ul>
              <li>
                Practice stress awareness: Regularly check in with yourself to
                identify signs of stress and acknowledge your emotions.
              </li>
              <li>
                Self-care and relaxation techniques: Engage in activities that
                promote relaxation and well-being, such as exercise, meditation,
                deep breathing exercises, and hobbies you enjoy.
              </li>
              <li>
                Healthy lifestyle choices: Maintain a balanced diet, get enough
                sleep, limit caffeine and alcohol intake, and prioritize regular
                physical activity.
              </li>
              <li>
                Time management and prioritization: Organize your tasks, set
                realistic goals, and break them down into manageable steps to
                reduce stress caused by feeling overwhelmed.
              </li>
              <li>
                Seek support: Reach out to friends, family, or professionals for
                support and guidance. Talking about your stressors can provide
                perspective and assistance.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
