export default async function handler(req, res) {
  const workspace = 'ZRS';
  const counterName = 'ZRS';
  const token = 'ut_Hf2FmaxgpHzPoenW7PUT7SsJovj5aAOf0PZVeoTL';

  try {
    const response = await fetch(
      `https://counterapi.dev/api/v2/${workspace}/${counterName}/up`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const data = await response.json();
    res.status(200).json({ value: data.value });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
