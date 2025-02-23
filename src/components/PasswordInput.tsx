function PasswordInput({ password, setPassword }: { password: string; setPassword: (value: string) => void }) {
    return (
        <div>
            <div>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                />
            </div>
        </div>
    );
}

export default PasswordInput;