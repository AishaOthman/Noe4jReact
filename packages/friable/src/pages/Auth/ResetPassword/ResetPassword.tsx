import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function ResetPassword() {
    const [verifying, setVerifying] = useState<boolean>(true);
    const [verified, setVerified] = useState<boolean>(false);
    const [changing, setChanging] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    const [confirm, setConfirm] = useState<string>('');
    const [oobCode, setOobCode] = useState<string>('');
    const [error, setError] = useState<string>('');

    const navigate = useNavigate();

  return (
    <div>ResetPassword</div>
  )
}

export default ResetPassword