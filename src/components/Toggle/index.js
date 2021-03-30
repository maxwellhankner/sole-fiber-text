import React from 'react';
import './style.css';
import { FaEye } from 'react-icons/fa';

function Toggle({ currentShoe, setCurrentShoe, visibility, setVisibility }) {
  const handleShoe = (shoe) => {
    // if right shoe
    if (shoe === 'right' && shoe !== currentShoe) {
      if (visibility.right) {
        setCurrentShoe(shoe);
      } else {
        // L => R
        let visObj = { ...visibility };
        visObj.right = true;
        visObj.left = false;
        setVisibility(visObj);
        setCurrentShoe(shoe);
      }
    }
    // if left shoe
    else if (shoe === 'left' && shoe !== currentShoe) {
      if (visibility.left) {
        setCurrentShoe(shoe);
      } else {
        // R => L
        let visObj = { ...visibility };
        visObj.right = false;
        visObj.left = true;
        setVisibility(visObj);
        setCurrentShoe(shoe);
      }
    }
  };

  const handleToggleShoeVisible = (index) => {
    // if toggle right
    if (index === 1) {
      // if left is current - toggle right
      if (currentShoe === 'left') {
        if (visibility.right) {
          // LR => L
        } else {
          // L => LR
        }

        let visObj = { ...visibility };
        visObj.right = !visObj.right;
        setVisibility(visObj);
      }
      // if right is current, we know it's visible
      else if (currentShoe === 'right') {
        // if left is visible - make left current, make right invisible
        if (visibility.left) {
          // LR => L
          let visObj = { ...visibility };
          visObj.right = false;
          setVisibility(visObj);

          setCurrentShoe('left');
        }
        // if left is invisible - make left visible and current, make right invisible
        else {
          // R => L
          let visObj = { ...visibility };
          visObj.right = !visObj.right;
          visObj.left = !visObj.left;
          setVisibility(visObj);
          setCurrentShoe('left');
        }
      }
    }
    // if toggle left
    else if (index === 2) {
      // if right is current - toggle left
      if (currentShoe === 'right') {
        if (visibility.left) {
          // LR => R
        } else {
          // R => LR
        }

        let visObj = { ...visibility };
        visObj.left = !visObj.left;
        setVisibility(visObj);
      }
      // if left is current, we know it's visible
      else if (currentShoe === 'left') {
        // if right is visible - make right current, make left invisible
        if (visibility.right) {
          // LR => R
          let visObj = { ...visibility };
          visObj.left = false;
          setVisibility(visObj);

          setCurrentShoe('right');
        }
        // if right is invisible - make right visible and current, make left invisible
        else {
          // L => R
          let visObj = { ...visibility };
          visObj.right = !visObj.right;
          visObj.left = !visObj.left;
          setVisibility(visObj);
          setCurrentShoe('right');
        }
      }
    }
  };

  return (
    <div className="design-preview-toggle-container">
      <div className="design-preview-toggle-left">
        <div
          className={`design-preview-toggle-shoe ${
            currentShoe === 'right' ? null : 'disabled-shoe'
          }`}
          onClick={() => {
            handleShoe('right');
          }}
        >
          <p>Right</p>
        </div>
        <div
          className={`design-preview-toggle-shoe ${
            currentShoe === 'left' ? null : 'disabled-shoe'
          }`}
          onClick={() => {
            handleShoe('left');
          }}
        >
          <p>Left</p>
        </div>
      </div>
      <div className="design-preview-toggle-right">
        <div
          className={`design-preview-toggle-visible ${
            visibility.right ? null : 'disabled-visibility'
          }`}
          onClick={() => {
            handleToggleShoeVisible(1);
          }}
        >
          <FaEye />
        </div>
        <div
          className={`design-preview-toggle-visible ${
            visibility.left ? null : 'disabled-visibility'
          }`}
          onClick={() => {
            handleToggleShoeVisible(2);
          }}
        >
          <FaEye />
        </div>
      </div>
    </div>
  );
}

export default Toggle;
