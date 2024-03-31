let i = 2;

  const addSubject = () => {
    const tr = document.createElement('tr');

    tr.innerHTML = `<tr>
                    <th scope="row">${i}</th>
                    <td>
                      <input name="mataKuliah[]" type="text" class="form-control w-75" >
                    </td>
                    <td>
                      <input name="sks[]" type="number" class="form-control w-75" >
                    </td>
                    <td>
                      <input name="nilai[]" type="number" max="4" class="form-control w-75" >
                    </td>
                    <td>
                      <input name="nilaiHuruf[]" value="akan diisi otomatis" class="form-control w-75"  disabled readonly >
                    </td>
                  </tr>`;
    document.getElementById("t-body").appendChild(tr);
    i++;
  }

  const calculateIPK = () => {
    const nilai = document.querySelectorAll('input[name="nilai[]"]')
    const sks = document.querySelectorAll('input[name="sks[]"]')
    const nilaiHuruf = document.querySelectorAll('input[name="nilaiHuruf[]"]')

    let totalNilai = 0
    let totalSks = 0

    nilai.forEach((nilai, index) => {
      totalNilai += parseInt(nilai.value) * parseInt(sks[index].value)
      totalSks += parseInt(sks[index].value)
      if (nilai.value >= 4) {
        nilaiHuruf[index].value = 'A'
      } else if (nilai.value >= 3) {
        nilaiHuruf[index].value = 'B'
      } else if (nilai.value >= 2) {
        nilaiHuruf[index].value = 'C'
      } else if (nilai.value >= 1) {
        nilaiHuruf[index].value = 'D'
      }
    })

    let ipk = totalNilai / totalSks

    const elemenIpk = document.getElementById("ipk")
    elemenIpk.innerHTML = "Indeks Prestasi Kumulatif : " + ipk.toFixed(2)
  }