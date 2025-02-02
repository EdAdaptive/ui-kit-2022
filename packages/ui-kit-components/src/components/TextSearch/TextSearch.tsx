import {
  Autocomplete,
  AutocompleteProps,
  AutocompleteRenderOptionState,
  CircularProgress,
  TextField,
} from '@mui/material';

import * as Icons from '../../icons';

export interface TextSearchProps<T>
  extends Omit<AutocompleteProps<T, false, false, false>, 'renderInput'> {
  placeholder?: string;
}

export const renderPredictiveLabel = (
  label: string,
  { inputValue, selected }: AutocompleteRenderOptionState,
) => {
  if (inputValue === '' || selected) {
    return label;
  }

  const { elements } = Array.from(
    label.toLowerCase().matchAll(new RegExp(inputValue.toLowerCase(), 'g')),
  ).reduce(
    (
      { elements, lastIndex }: { elements: React.ReactNodeArray; lastIndex: number },
      match,
    ) => {
      const matchIndex = match.index || 0;
      const nextIndex = matchIndex + inputValue.length;

      return {
        elements: [
          ...elements.slice(0, -1),
          ...[
            label.substring(lastIndex, matchIndex).replace(/ /g, '\u00A0'), // replace whitespace with &nbsp;
            <span key={matchIndex} className="prediction-highlight">
              {label.substring(matchIndex, nextIndex).replace(/ /g, '\u00A0')}
            </span>,
            label.substring(nextIndex, label.length).replace(/ /g, '\u00A0'),
          ].filter((s) => s),
        ],
        lastIndex: nextIndex,
      };
    },
    { elements: [label], lastIndex: 0 },
  );

  return <>{elements}</>;
};

export interface TextSearchOptionBase {
  label: string;
}

const TextSearch = <T extends TextSearchOptionBase>({
  placeholder,
  getOptionLabel = (opt: T) => (opt.label || opt) as string,
  ...props
}: TextSearchProps<T>) => {
  return (
    <Autocomplete
      {...props}
      clearIcon={<Icons.Close />}
      renderOption={(props, opt: T, state) => (
        <li {...props}>{renderPredictiveLabel(getOptionLabel(opt), state)}</li>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          placeholder={placeholder}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {props.loading ? <CircularProgress color="primary" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
};

export default TextSearch;
