import * as React from 'react';
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

export namespace MucText {
  export interface Props extends WithStyles<typeof styles> {
    modelId: string;
    modelLabel: string;
    modelValue: string | number;
  }
}

const styles = (theme: Theme) => createStyles({
  root: {},
  textLabel: {
    color: '#651fff'
  },
  textFocused: {},
  textUnderline: {
    '&:before': {
      borderBottomColor: '#E0E0E0'
    },
    '&:focus': {
      borderBottomColor: '#651fff'
    }
  }
});

class MucText extends React.Component<MucText.Props> {
  static defaultProps = {
    modelId: 'MucText',
    modelLabel: 'MucText',
    modelValue: 'MucText'
  };

  render() {
    const { classes, modelId, modelLabel, modelValue } = this.props;

    return (
      <FormControl id={modelId} className={classes.root}>
        <InputLabel
          htmlFor={modelId}
          FormLabelClasses={{
            root: classes.textLabel,
            focused: classes.textFocused
          }}>
          {modelLabel}
        </InputLabel>
        <Input
          id={modelId + '-value'}
          classes={{
            underline: classes.textUnderline
          }}
          value={modelValue}
          readOnly
          autoFocus
        />
      </FormControl>
    );
  }
}

export default withStyles(styles)(MucText);
