class Flash
  @record = {}

  def [](key)
    @record[key] ||= {} # TODO
  end
end
