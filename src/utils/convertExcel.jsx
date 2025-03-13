import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

export const exportCompaniesToExcel = (jsonData) => {
  try {
    if (!jsonData?.data?.length) {
      throw new Error('Nenhum dado encontrado para exportação');
    }

    const worksheetData = jsonData.data.map(company => ({
      'Razão Social': company.empresa.razaoSocial,
      'CNPJ': company.empresa.documento,
      'Inscrição Estadual': company.empresa.inscricaoEstadual,
      'Tipo de Vínculo': company.empresa.tipoVinculo,
      'Situação Cadastral': company.empresa.situacaoRegimeCadastral,
      'MEI': company.empresa.seMEI ? 'Sim' : 'Não',
      'Ativa': company.empresa.seAtiva ? 'Sim' : 'Não',
      'Data Fim Vigência': company.empresa.dataFimVigencia !== "0001-01-01T00:00:00" ? 
        new Date(company.empresa.dataFimVigencia).toLocaleDateString() : 'N/A',
      'Pendências Pendentes': company.pendencia.quantidadeInconsistenciaPendente,
      'Pendências Não Lidas': company.pendencia.quantidadeInconsistenciaNaoLida,
      'Total Mensagens': company.analiseDte.total,
      'Mensagens Lidas': company.analiseDte.lidas,
      'Mensagens Não Lidas': company.analiseDte.naoLidas
    }));

    const worksheet = XLSX.utils.json_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Empresas');

    const excelBuffer = XLSX.write(workbook, { 
      bookType: 'xlsx', 
      type: 'array',
      cellStyles: true
    });

    const data = new Blob([excelBuffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });
    
    saveAs(data, `relatorio_empresas_${new Date().toISOString().split('T')[0]}.xlsx`);

  } catch (error) {
    console.error('Erro na exportação:', error);
    alert(`Erro ao exportar: ${error.message}`);
  }
};