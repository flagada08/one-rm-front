import { connect } from 'react-redux';

import Chart from 'src/components/Chart';

const mapStateToProps = (state) => ({

  AllPerfs: state.detailExercise.AllGoals,
});

const mapDispatchToProps = () => ({

 
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Chart);
