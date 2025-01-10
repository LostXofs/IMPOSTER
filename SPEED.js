 h5gg.require(5.9);
    
        function setSpeedR2() {
          h5gg.editAll('4397530849758414897', 'I64');
        }
    
        function disableSpeedR2() {
          h5gg.editAll('4397530849764387586', 'I64');
        }
    
        function searchSpeedR2() {
          h5gg.clearResults();
          h5gg.searchNumber('4397530849764387586', 'I64', '0x100000000', '0x200000000');
        }
        function R2() {
          if (button.classList.contains("active")) {
            disableSpeedR2();
          } else {
            if (h5gg.getResultsCount() != 1) {
              searchSpeedR2();
            }
            setSpeedR2();
          }
          button.classList.toggle('active');
        }

  vant.showNotify({
        type: 'success',
        message: 'Speed X2 Activado ( Press Agein To Deactivate )'
    });






    
        function setSpeedR5() {
          h5gg.editAll('4397530849758414697', 'I64');
        }
    
        function disableSpeedR5() {
          h5gg.editAll('4397530849764387586', 'I64');
        }
    
        function searchSpeedR5() {
          h5gg.clearResults();
          h5gg.searchNumber('4397530849764387586', 'I64', '0x100000000', '0x200000000');
        }
        function R5() {
          if (button.classList.contains("active")) {
            disableSpeedR5();
          } else {
            if (h5gg.getResultsCount() != 1) {
              searchSpeedR5();
            }
            setSpeedR5();
          }
          button.classList.toggle('active');
        }



  vant.showNotify({
        type: 'success',
        message: 'Speed X5 Activado ( Press Agein To Deactivate )'
    });










        function setSpeedR8() {
          h5gg.editAll('4366458311853685297', 'I64');
        }
    
        function disableSpeedR8() {
          h5gg.editAll('4397530849764387586', 'I64');
        }
    
        function searchSpeedR8() {
          h5gg.clearResults();
          h5gg.searchNumber('4397530849764387586', 'I64', '0x100000000', '0x200000000');
        }
        function R8() {
          if (button.classList.contains("active")) {
            disableSpeedR8();
          } else {
            if (h5gg.getResultsCount() != 1) {
              searchSpeedR8();
            }
            setSpeedR8();
          }
          button.classList.toggle('active');
        }



  vant.showNotify({
        type: 'success',
        message: 'Speed X8 Activado ( Press Agein To Deactivate )'
    });

