function PasswordStrength({ password }: { password: string }) {
    const getStrength = () => {
        let score = 0;
        if (password.length >= 8) score++;
        if (/[A-Z]/.test(password)) score++;
        if (/[0-9]/.test(password)) score++;
        if (/[!@#$%^&*]/.test(password)) score++;

        const levels = ["Weak", "Weak", "Medium", "Strong", "Very Strong"];
        return { score, label: levels[score] || "Invalid" };
    };

    const { score, label } = getStrength();

    return (
        <div>
            <div>
                <div style={{ width: `${(score / 3) * 100}%`, height: "10px", backgroundColor: "black" }}></div>
            </div>
            <p>Password Strength: {label}</p>
            <ul>
                <li>{password.length >= 8 ? "✓ At least 8 characters" : "✗ At least 8 characters"}</li>
                <li>{/[A-Z]/.test(password) ? "✓ At least one uppercase letter" : "✗ At least one uppercase letter"}</li>
                <li>{/[0-9]/.test(password) ? "✓ At least one number" : "✗ At least one number"}</li>
                <li>{/[!@#$%^&*_]/.test(password) ? "✓ At least one special character" : "✗ At least one special character"}</li>
            </ul>
        </div>
    );
}

export default PasswordStrength;