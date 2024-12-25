export default function ColorTracker() {
  return (
    <div className="grid grid-cols-7 gap-2 p-4 rounded-lg bg-gray-50">
      {['Violet', 'Indigo', 'Blue', 'Green', 'Yellow', 'Orange', 'Red'].map((color) => (
        <div key={color} className="aspect-square rounded-full bg-gray-200" />
      ))}
    </div>
  );
}