import { useEffect, useState } from 'react';

function ProgressTracking() {
  const [isClient, setIsClient] = useState(false);
  const [showScoreReward, setShowScoreReward] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleScoreRewardClick = () => {
    setShowScoreReward(!showScoreReward);
  };

  return (
    <div>
      <h1>Progress Tracking</h1>
      <button className="button">Learning Record</button>
      <p></p>
      <span className="animals">Animals</span>
      <p></p>
      <table>
        <tr>
          <td>Tiger</td>
          <td>老虎</td>
          <td></td>
        </tr>
        <tr>
          <td>Dog</td>
          <td>狗</td>
          <td></td>
        </tr>
        <tr>
          <td>Cat</td>
          <td>貓</td>
          <td>✯</td>
        </tr>
      </table>
      <p></p>
      <span className="fruit">Fruit</span>
      <p></p>
      <table>
        <tr>
          <td>Orange</td>
          <td>橙</td>
          <td></td>
        </tr>
        <tr>
          <td>Apple</td>
          <td>蘋果</td>
          <td>✯</td>
        </tr>
        <tr>
          <td>Kiwi</td>
          <td>奇異果</td>
          <td></td>
        </tr>
      </table>
      <p></p>

      <button className="new-button" onClick={handleScoreRewardClick}>
        {showScoreReward ? 'Hide Score & Reward' : 'Show Score & Reward'}
      </button>
      <p></p>
      {showScoreReward && (
        <div style={{ display: "flex", justifyContent: "left" }}>
          <img src="/img/SR_final.png" style={{ width: "200px", margin: "0 5em" }} />
        </div>
      )}
    </div>
  );
}

export default ProgressTracking;