console.log("Soweto Bites Marketplace Loaded");

async function loadStores() {

    const { data, error } = await supabase
    .from('stores')
    .select('*');

    if(error){
        console.log(error);
        return;
    }

    const container =
    document.getElementById("stores");

    container.innerHTML = "";

    data.forEach(store => {

        container.innerHTML += `
        <div class="store-card">
            <img src="${store.logo_url || 'https://via.placeholder.com/400'}">
            <div class="store-card-content">
                <h3>${store.store_name}</h3>
                <p>${store.description || ''}</p>
                <p class="verified">✔ Verified Store</p>
                <button class="btn">
                Visit Store
                </button>
            </div>
        </div>
        `;
    });
}

loadStores();
const SUPABASE_URL =
'https://YOUR-PROJECT.supabase.co';

const SUPABASE_ANON_KEY =
'YOUR-ANON-KEY';

const supabase =
window.supabase.createClient(
SUPABASE_URL,
SUPABASE_ANON_KEY
);
