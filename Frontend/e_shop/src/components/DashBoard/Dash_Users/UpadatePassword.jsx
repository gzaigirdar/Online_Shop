function UpdatePassword() {
    return (
        <div className="w-72 rounded-xl border border-blue-200 bg-white p-4 shadow-sm">
  <div className="flex items-center justify-between">
    <div>
      <h3 className="text-sm font-semibold text-gray-900">John Doe</h3>
      <p className="text-xs text-gray-500">john@example.com</p>
    </div>

    <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
      Reset
    </span>
  </div>

  <div className="mt-4">
    <label className="mb-1 block text-xs font-medium text-gray-600">
      New Password
    </label>

    <input
      type="password"
      placeholder="Enter new password"
      className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
    />
  </div>

  <button
    className="mt-4 w-full rounded-lg bg-blue-600 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
  >
    Reset Password
  </button>
</div>
      );
}

export default UpdatePassword ;