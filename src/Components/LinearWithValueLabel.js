import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LinearProgressWithLabel(props) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1, p:1 }}>
          <LinearProgress style={{ height: 10 }} variant="buffer" {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography sx={{ color:'#ffffff' }} variant="body2" color="text.secondary">{`${Math.round(
            props.value,
          )}s`}</Typography>
        </Box>
      </Box>
    );
  }


  LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
  };

export default LinearProgressWithLabel;