fetch("https://discord.com/api/v10/invites/gVJeJfH3gh?with_counts=true")
    .then(r => r.ok ? r.json() : Promise.reject())
    .then(d => {
        const el = document.getElementById("discord-stats");
        const n = x => x.toLocaleString("en-US");
        el.textContent = `${n(d.approximate_presence_count)} online · ${n(d.approximate_member_count)} members`;
        el.hidden = false;
    })
    .catch(() => {});
