import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import { styled, TextField, Typography, useTheme } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";

import { useAppDispatch } from "@/hooks/reduxHooks";
import { dataActions } from "@/reducers/dataReducer";
import { validateNonEmptyString } from "@/utils/formValidationUtils";

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    padding: theme.spacing(1),
    display: "flex",
    alignItems: "center",
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: `1px solid ${theme.palette.border.main} !important`,
    },
  },

  "& .MuiInputBase-input": {
    margin: 0,
    padding: `0px ${theme.spacing(1)}`,
  },
}));

type CommentInputProps = {
  postId?: string;
};

type DefaultValuesType = { commentText: string };

const CommentInput: React.FC<CommentInputProps> = ({ postId }) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const { control, handleSubmit, reset } = useForm<DefaultValuesType>({
    defaultValues: { commentText: "" },
  });

  const onSubmit = (formData: DefaultValuesType) => {
    if (!postId) return;

    dispatch(
      dataActions.addComment({ commentText: formData.commentText, postId })
    );

    reset();
  };

  return (
    <Controller
      control={control}
      name="commentText"
      render={({ field }) => {
        const { value, onChange } = field;

        return (
          <StyledTextField
            value={value}
            placeholder="Add comment..."
            multiline
            maxRows={4}
            InputProps={{
              startAdornment: <SentimentSatisfiedOutlinedIcon />,
              endAdornment: (
                <button onClick={handleSubmit(onSubmit)}>
                  <Typography sx={{ color: theme.palette.link.main }}>
                    Post
                  </Typography>
                </button>
              ),
            }}
            onChange={(event) => onChange(event.target.value)}
          />
        );
      }}
      rules={{
        validate: { validateInput: (value) => validateNonEmptyString(value) },
      }}
    />
  );
};

export default CommentInput;
