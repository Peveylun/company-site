function CompanyInfo({ amount, text }) {
  return (
    <div className="flex flex-col items-center">
      <p className="font-semibold text-xl">{amount}</p>
      <p className="font-medium text-sm">{text.toUpperCase()}</p>
    </div>
  )
}

export default CompanyInfo;