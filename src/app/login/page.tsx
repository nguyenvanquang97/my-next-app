import { TextField, Button, Container, Typography } from '@mui/material';

export default function LoginPage() {
  return (
    <Container className="flex flex-col items-center justify-center min-h-screen">
      <Typography variant="h4" className="mb-8">
        Đăng nhập
      </Typography>
      <form className="w-full max-w-sm space-y-4">
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          className="bg-white"
        />
        <TextField
          fullWidth
          label="Mật khẩu"
          type="password"
          variant="outlined"
          className="bg-white"
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          className="mt-4"
        >
          Đăng nhập
        </Button>
      </form>
    </Container>
  );
}