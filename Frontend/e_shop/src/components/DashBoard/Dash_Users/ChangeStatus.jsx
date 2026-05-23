function ChangeStatus() {
    return ( 
              <div class="w-72 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
  <div class="flex items-center justify-between">
    <div>
      <h3 class="text-sm font-semibold text-gray-900">John Doe</h3>
      <p class="text-xs text-gray-500">john@example.com</p>
    </div>

    <span class="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
      Active
    </span>
  </div>

  <div class="mt-4">
    <label class="mb-1 block text-xs font-medium text-gray-600">
      User Role
    </label>

    <select
      class="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
    >
      <option value="normal">Normal User</option>
      <option value="admin">Admin</option>
    </select>
  </div>

  <button
    class="mt-4 w-full rounded-lg bg-blue-600 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
  >
    Save Changes
  </button>
</div>
     );
}

export default ChangeStatus;